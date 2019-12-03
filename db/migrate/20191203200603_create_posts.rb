class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.text :image_url
      t.string :hashtags
      t.string :category
      t.boolean :is_Anon
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
