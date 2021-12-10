class CreateSubmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :submissions do |t|
      t.references :position, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
