class CreateTransitions < ActiveRecord::Migration[6.1]
  def change
    create_table :transitions do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.references :start, null: false
      t.references :finish, null: false

      t.timestamps
    end
  end
end
