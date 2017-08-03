require 'spec_helper'
require 'rails_helper'

RSpec.feature 'user signs up' do
  scenario 'specify valid and required info' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_button 'Sign Up'

    expect(page).to have_content("Sign Up Successful!")
    expect(page).to have_content("Sign Out")
  end

  scenario 'required info not supplied' do

  end

  scenario 'password confirmation does not match' do

  end

end
