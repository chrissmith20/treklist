require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:username).when("Globetrotter") }
  it { should_not have_valid(:username).when(nil, "") }

  it { should have_valid(:email).when("travel@world.com") }
  it { should_not have_valid(:email).when(nil, "") }
end
