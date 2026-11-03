import officialNames from './officialLoadoutNames.json';

// The keys in loadout data stay stable for artwork and source lookup.
export function loadoutName(name, lang) {
  return officialNames[name]?.labels[lang] ?? name;
}
