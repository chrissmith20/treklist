require "rails_helper"

RSpec.describe Api::V1::DestinationsController, type: :controller do
  let!(:first_user) { User.create(
  username: "travelbobby",
  email: "bobby@example.com",
  password: "password"
  ) }

  let!(:first_destination) { Destination.create(
    user: first_user,
    title: "The Big Apple",
    description: "Want to see times square and all it's glory"
  ) }

  describe "GET#index" do
    it "should return a list of destinations" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1



      expect(returned_json[0]["title"]).to eq "The Big Apple"
      expect(returned_json[0]["description"]).to eq "Want to see times square and all it's glory"
    end
  end

  describe "GET#show" do

    it "should return an individual destination" do

      get :show, params: {id: first_destination.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 4

      expect(returned_json["title"]).to eq "The Big Apple"
      expect(returned_json["description"]).to eq "Want to see times square and all it's glory"
    end
  end
end
