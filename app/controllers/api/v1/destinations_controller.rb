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
    @client.spots_by_query('Paul Revere Statue')

    destination.user = current_user
    if destination.save
      render json: destination
    else
      render json: { errors: destination.errors.full_messages }
    end
  end

  protected
  def destination_params
    params.permit(
      :title,
      :description
    )
  end
end
