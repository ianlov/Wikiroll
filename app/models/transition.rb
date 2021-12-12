class Transition < ApplicationRecord
  belongs_to :start, class_name: 'Position'
  belongs_to :finish, class_name: 'Position'
end
