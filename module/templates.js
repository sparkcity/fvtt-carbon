/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/carbon2185/templates/actors/parts/actor-traits.html",
    "systems/carbon2185/templates/actors/parts/actor-inventory.html",
    "systems/carbon2185/templates/actors/parts/actor-features.html",
    "systems/carbon2185/templates/actors/parts/actor-spellbook.html",
    "systems/carbon2185/templates/actors/parts/actor-effects.html",

    // Item Sheet Partials
    "systems/carbon2185/templates/items/parts/item-action.html",
    "systems/carbon2185/templates/items/parts/item-activation.html",
    "systems/carbon2185/templates/items/parts/item-description.html",
    "systems/carbon2185/templates/items/parts/item-mountable.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
