class Api::V1::DestinationsController < ApiController

  def index
    render json: Destination.all
  end

  def show
    render json: Destination.find(params[:id])
  end

  def create
    destination = Destination.new(destination_params)

    @client = GooglePlaces::Client.new('AIzaSyArHw2cFpooL6LryK0VR1A83O0v5hSeBIk')
    location = @client.spots_by_query(destination.title).first
    destination.title = location.name
    destination.latitude = location.lat
    destination.longitude = location.lng
    destination.google_places_place_id = location.id

    binding.pry

    # move google places api query to here and use the title from destination_params in your search
    # using the first location result from this query, take the google places id, title, lat and long, and add to the new destination you are creating

    # add a lat and long column to the destinations table
    # rename the location column to "google_places_place_id"

    #
    destination.user = current_user

    if destination.save!
      render json: destination
    else
      render json: { errors: destination.errors.full_messages }
    end
  end

  protected
  def destination_params
    params.permit(
      :title,
      :description,
      :latitude,
      :longitude
    )
  end
end
