# Localisation

The Javascript library uses a native library (ReactLocalization) to get the current interface language, then it loads and displays the strings matching the current interface locale or the default language (the first one if a match is not found) if a specific localization can't be found.
## package used  
- [i18next] (https://www.i18next.com/overview/getting-started)
- [react-i18next] (https://github.com/i18next/react-i18next)

## Usage
``` sh
import i18n from 'localisation';
```
To use 
```sh
i18n.t('string_name')
```

## To add new language 
Go languages folder inside packages/localisation/lib
You can add new file ```languagename.json``` in this format and can write your corresponding string there.
    Edit ```localisation.ts``` file in src folder inside packages/localisation/lib
  
     import languagename from "../lib/languagename.json";


      resources: {
        en: {
            translations: english,
        },
        hi: {
            translations: hindi,
        },
        ## write in below format for new langage
        // lan_type :{
            translation: language_name
        }
    },

