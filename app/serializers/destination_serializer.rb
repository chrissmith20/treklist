class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user, :longitude, :latitude

  belongs_to :user
end
