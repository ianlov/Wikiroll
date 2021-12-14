class Position < ApplicationRecord
  has_many :start_transitions, class_name: 'Transition', foreign_key: 'start_id'
  has_many :finish_transitions, class_name: 'Transition', foreign_key: 'finsih_id'
  has_many :submissions
end
