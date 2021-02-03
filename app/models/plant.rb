class Plant < ApplicationRecord
  belongs_to :user
  belongs_to :plant_type
end
