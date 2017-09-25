require 'rails_helper'
require 'spec_helper'

RSpec.describe Myconcert, type: :model do
  it { should have_valid(:artist).when('U2', 'Metallica') }
  it { should_not have_valid(:artist).when(nil, '') }

  it { should have_valid(:venue).when('Bright Music Hall', 'Great Scott') }
  it { should_not have_valid(:venue).when(nil, '') }

  it { should have_valid(:start_date).when('09/11/2017', '9/11', 'September 11, 2017') }
  it { should_not have_valid(:start_date).when(nil, '') }

  it { should have_valid(:jambase_id).when('99999', '111111') }
  it { should_not have_valid(:venue).when(nil, '') }

end
