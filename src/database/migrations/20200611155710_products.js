
exports.up = function(knex) {
  return knex.schema.createTable('products', function(table){
      table.string('product_id').notNullable();
      table.string('product_name').notNullable();
      table.decimal('product_price').notNullable();
      table.string('product_promotion').notNullable();
      table.decimal('product_price_promotion').notNullable();
      table.string('product_categorie').notNullable();

      table.foreign('product_id').references('id').inTable('store');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
