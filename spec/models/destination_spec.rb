require 'rails_helper'

describe Destination do

  it { should have_valid(:location).when("a location") }
  it { should_not have_valid(:location).when(nil, "") }

  it { should have_valid(:description).when("a description") }
  it { should_not have_valid(:description).when(nil, "") }
end
