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
    place = @client.spots_by_query(destination.location).first
    destination.location = place.name
    destination.latitude = place.lat
    destination.longitude = place.lng
    destination.google_places_place_id = place.id
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
      :location,
      :description,
      :latitude,
      :longitude,
      :google_places_place_id
    )
  end
end
