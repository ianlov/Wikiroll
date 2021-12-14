class AddColumnToTransitions < ActiveRecord::Migration[6.1]
  def change
    add_column :transitions, :type, :string
  end
end
