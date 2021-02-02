class Plant < ApplicationRecord
  belongs_to :user
  has_one :plant_types
end
