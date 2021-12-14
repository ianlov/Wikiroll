class AddColumnToSubmissions < ActiveRecord::Migration[6.1]
  def change
    add_column :submissions, :type, :string
  end
end
