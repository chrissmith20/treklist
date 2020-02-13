require 'rails_helper'

describe Destination do

  it { should have_valid(:title).when("a title") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:description).when("a description") }
  it { should_not have_valid(:description).when(nil, "") }
end
