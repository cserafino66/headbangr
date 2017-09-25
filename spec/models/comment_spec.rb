require 'rails_helper'
require 'spec_helper'

RSpec.describe Comment, type: :model do
  it { should have_valid(:text).when('blahblah', 'blahblahblah') }
  it { should_not have_valid(:text).when(nil, '') }

end
