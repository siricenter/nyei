require 'rails_helper'

RSpec.describe StaticController, :type => :controller do

  describe "GET landing" do
    it "returns http success" do
      get :landing
      expect(response).to be_success
    end
  end

end
