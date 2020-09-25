import Actor5e from "../../../systems/dnd5e/module/actor/entity.js";
import { DND5E } from "../../../systems/dnd5e/module/config.js"
import { CompactBeyond5eSheet } from "../../../modules/compact-beyond-5e-sheet/foundryvtt-compactBeyond5eSheet.js"

//changing abilities to system abilities
DND5E.abilities["wis"] = "Technology";
DND5E.abilities["cha"] = "People";
DND5E.abilityAbbreviations["wis"] = "Tec";
DND5E.abilityAbbreviations["cha"] = "Peo";
//changing skills to system skills
DND5E.skills["ani"] = "Computing";
DND5E.skills["arc"] = "Engineering";
DND5E.skills["bur"] = "Bureaucracy";
DND5E.skills["gmb"] = "Gambling";
DND5E.skills["ins"] = "Hacking";
DND5E.skills["nat"] = "Mechanics";
DND5E.skills["nvg"] = "Navigation";
DND5E.skills["pre"] = "Presence";
DND5E.skills["sur"] = "Robotics";
DND5E.skills["stw"] = "Streetwise";
DND5E.skills["trk"] = "Tracking";
DND5E.skills["var"] = "Vehicles (Aircraft)";
DND5E.skills["vla"] = "Vehicles (Land)";
DND5E.skills["smo"] = "Sense Motive";

//Adding relevant skills to npc and character sheets
const prep = Actor5e.prototype.prepareBaseData;	
function extendActorData() {
	if(this.data.type === "npc" || this.data.type === "character") {
    const skl = this.data.data.skills;
    const atr = this.data.data.attributes;
    const curr = this.data.data.currency;
    //skills
    skl["bur"] = skl["bur"] || {value: 0, ability: "cha"};
		skl["gmb"] = skl["gmb"] || {value: 0, ability: "int"};
		skl["nvg"] = skl["nvg"] || {value: 0, ability: "int"};
		skl["pre"] = skl["pre"] || {value: 0, ability: "cha"};
		skl["smo"] = skl["smo"] || {value: 0, ability: "cha"};
		skl["stw"] = skl["stw"] || {value: 0, ability: "int"};
    skl["trk"] = skl["trk"] || {value: 0, ability: "int"};
    skl["var"] = skl["var"] || {value: 0, ability: "wis"};
    skl["vla"] = skl["vla"] || {value: 0, ability: "dex"};
    //attributes
    atr["bloodTox"] = atr["bloodTox"] || 0;
    atr["corpInf"] = atr["corpInf"] || 0;
    atr["streetInf"] = atr["streetInf"] || 0; 
    //currency
    curr["₩"] = curr["₩"] || 0;
	}
	return prep.call(this);
}
Actor5e.prototype.prepareBaseData = extendActorData;

//Registering as default sheet
  class CarbonCompactSheet extends CompactBeyond5eSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push('carboncompact');
        return options;
    }
  }
  Actors.registerSheet("dnd5e", CarbonCompactSheet, {
    types: ["character"],
    makeDefault: true
  });

//Adding elements to CarbonCompact sheet
Hooks.on("renderActorSheet", (app, html, data) => {
	const traits = html.find("div.traits");
  traits.prepend(`
  <div class="form-group {{#unless data.attributes.bloodTox}}inactive{{/unless}}">
    <label>B. Tox.</label>
    <input type="text" name="data.attributes.bloodTox" data-dtype="Number" placeholder="0"
      value="${data.data.attributes.bloodTox}" />
  </div>
  <div class="form-group {{#unless data.attributes.corpInf}}inactive{{/unless}}">
    <label>Cp. Inf.</label>
    <input type="text" name="data.attributes.corpInf" data-dtype="Number" placeholder="0"
      value="${data.data.attributes.corpInf}" />
  </div>
  <div class="form-group {{#unless data.attributes.streetInf}}inactive{{/unless}}">
    <label>St. Inf.</label>
    <input type="text" name="data.attributes.streetInf" data-dtype="Number" placeholder="0"
      value="${data.data.attributes.streetInf}" />
  </div>
  `);

/* @todo: only show W currency, none of the others
  const curr = html.find("div.currency-inputs");
  curr.remove("label.denomination.gp");
  curr.remove("label.denomination.pp");
  curr.remove("label.denomination.cp");
  curr.remove("label.denomination.ep");
  curr.remove("label.denomination.sp"); 
  */
});
