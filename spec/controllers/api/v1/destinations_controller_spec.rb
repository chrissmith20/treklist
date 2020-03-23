require "rails_helper"

RSpec.describe Api::V1::DestinationsController, type: :controller do
  let!(:first_user) { User.create(
  username: "Ricky Bobby",
  email: "ricky@bobby.com",
  password: "notfirstlast"
  ) }

  let!(:first_destination) { Destination.create(
    user: first_user,
    location: "The Big Apple",
    description: "Want to see times square and all it's glory",
    latitude: 40.7128,
    longitude: 74.0060,
    google_places_place_id: "HYIJKf4ofIlw44kRioRR8ajDNI4"
  ) }

  describe "GET#index" do
    it "should return a list of destinations" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1



      expect(returned_json[0]["location"]).to eq "The Big Apple"
      expect(returned_json[0]["description"]).to eq "Want to see times square and all it's glory"
      expect(returned_json[0]["latitude"]).to eq 40.7128
      expect(returned_json[0]["longitude"]).to eq 74.0060
      expect(returned_json[0]["google_places_place_id"]).to eq "HYIJKf4ofIlw44kRioRR8ajDNI4"

    end
  end

  describe "GET#show" do

    it "should return an individual destination" do

      get :show, params: {id: first_destination.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 8

      expect(returned_json["location"]).to eq "The Big Apple"
      expect(returned_json["description"]).to eq "Want to see times square and all it's glory"
      expect(returned_json["latitude"]).to eq 40.7128
      expect(returned_json["longitude"]).to eq 74.0060
      expect(returned_json["google_places_place_id"]).to eq "HYIJKf4ofIlw44kRioRR8ajDNI4"
    end
  end
end
