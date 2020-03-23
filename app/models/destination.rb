class Destination < ApplicationRecord

  validates :location, presence: true
  validates :description, presence: true

  belongs_to :user
end
