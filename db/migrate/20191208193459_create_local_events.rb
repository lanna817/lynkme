class CreateLocalEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :local_events do |t|
      t.string :title
      t.text :image_url
      t.text :description
      t.boolean :is_event
      t.text :date
      t.text :address

      t.timestamps
    end
  end
end
