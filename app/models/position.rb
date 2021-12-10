class Position < ApplicationRecord
  has_many :submissions, dependent: :destroy
  has_many :transitions, dependent: :destroy
end
