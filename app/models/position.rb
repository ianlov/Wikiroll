class Position < ApplicationRecord
  has_many :submissions, dependant: :destroy
  has_many :transitions, dependant: :destroy
end
