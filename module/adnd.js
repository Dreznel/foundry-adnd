// Import Modules
import { AdndActor } from "./actor/actor.js";
import { AdndActorSheet } from "./actor/actor-sheet.js";
import { AdndItem } from "./item/item.js";
import { AdndItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.adnd = {
    AdndActor,
    AdndItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = AdndActor;
  CONFIG.Item.entityClass = AdndItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("adnd", AdndActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("adnd", AdndItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});