class Api::V1::DestinationsController < ApiController

  def index
    render json: Destination.all
  end

  def show
    render json: Destination.find(params[:id])
  end
end
