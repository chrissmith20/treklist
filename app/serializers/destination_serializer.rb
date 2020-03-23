class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :current_user, :longitude, :latitude, :google_places_place_id

  belongs_to :user
end
