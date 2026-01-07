const products = [
    {
        id: 1,
        name: "Lumânare flori",
        price: 20,
        image: "c1.jpg",
        image2: "c1_alt.jpg",
        desc: "O lumânare delicată cu motive florale, turnată manual.",
        specs: {
            "Greutate": "250g",
            "Înălțime": "12 cm",
            "Tip Ceară": "Soia",
            "Timp Ardere": "Approx. 30 ore"
        }
    },
    {
        id: 2,
        name: "Odorizant Trandafir",
        price: 15,
        image: "c2.jpg",
        image2: "c2_alt.jpg",
        desc: "Parfumul clasic și elegant al trandafirilor englezești.",
        specs: {
            "Greutate": "100g",
            "Tip": "Odorizant solid",
            "Aromă": "Trandafir",
            "Durată": "Până la 4 săptămâni"
        }
    },
    {
        id: 3,
        name: "Vanilie caldă",
        price: 5,
        image: "poze/vanilie.png",
        image2: "poze/vanilie_2.png",
        desc: "O aromă fină de vanilie.",
        specs: {
            "Greutate": "10g",
            "Format": "Ceară topită",
            "Aromă": "Vanilie",
            "Ambalaj": "Individual"
        }
    },
    {
        id: 4,
        name: "Migdale & Ciocolată albă",
        price: 5,
        image: "poze/migdale_choco_alba.png", 
        image2: "poze/migdale_choco_alba_2.png",
        desc: "Relaxare totală cu note profunde de migdale și ciocolată albă.",
        specs: {
            "Greutate": "10g",
            "Format": "Figurină Ceară",
            "Note": "Migdale, Ciocolată",
            "Utilizare": "Aromaterapie"
        }
    },
    {
        id: 5,
        name: "Vanilie & Lămâie",
        price: 5,
        image: "poze/vanilie_lamaie.png", 
        image2: "poze/vanilie_lamaie_2.png",
        desc: "Ceară parfumată cu arome de vanilie și lămâie.",
        specs: {
            "Greutate": "10g",
            "Format": "Figurină Ceară",
            "Aromă": "Fresh / Dulce",
            "Sezon": "Toate anotimpurile"
        }
    },
    {
        id: 6,
        name: "Portocale Coapte",
        price: 5,
        image: "poze/portocale.png", 
        image2: "poze/portocale_2.png",
        desc: "Ceară parfumată cu aromă de portocală coaptă.",
        specs: {
            "Greutate": "10g",
            "Format": "Formă fruct",
            "Aromă": "Citrice",
            "Culoare": "Portocaliu"
        }
    },
    {
        id: 7,
        name: "Iarna ca-n povești",
        price: 5,
        image: "poze/iarna.png", 
        image2: "poze/iarna_2.png",
        desc: "Ceară parfumată cu arome de iarnă.",
        specs: {
            "Greutate": "10g",
            "Format": "Tematică Iarnă",
            "Note": "Scorțișoară, Pin",
            "Tip Ceară": "Soia"
        }
    },
    {
        id: 8,
        name: "Magia Craciunului",
        price: 5,
        image: "poze/magia_craciunului.png", 
        image2: "poze/magia_craciunului_2.png",
        desc: "Lumanare festivă pentru momente magice.",
        specs: {
            "Greutate": "10g",
            "Înălțime": "5 cm",
            "Fitil": "Fără",
            "Colecție": "Crăciun"
        }
    },
    {
        id: 9,
        name: "Fistic Sarat",
        price: 5,
        image: "poze/fistic_sarat.png", 
        image2: "poze/fistic_sarat_2.png",
        desc: "O combinatie surprinzătoare de fistic cu sare.",
        specs: {
            "Greutate": "10g",
            "Aromă": "Gourmand",
            "Format": "Mini tartă",
            "Intensitate": "Puternică"
        }
    },
    {
        id: 10,
        name: "Muguri de pin si Vanilie",
        price: 5,
        image: "poze/pin_vanilie.png", 
        image2: "poze/pin_vanilie_2.png",
        desc: "Mireasma craciunului, muguri de pin si vanilie.",
        specs: {
            "Greutate": "10g",
            "Aromă": "Lemnos / Dulce",
            "Formă": "Brad",
            "Culoare": "Verde pal"
        }
    },
    {
        id: 12,
        name: "Clementine dulci",
        price: 5,
        image: "poze/clementine.png", 
        image2: "poze/clementine_2.png",
        desc: "O aroma inimaginabila de clementine dulci.",
        specs: {
            "Greutate": "35g",
            "Aromă": "Citrice",
            "Aspect": "Realist",
            "Utilizare": "Decor / Topire"
        }
    },
    {
        id: 13,
        name: "Strudel cu mere",
        price: 5,
        image: "poze/strudel_mere.png", 
        image2: "poze/strudel_mere_2.png",
        desc: "Un miros ce iti aduce aminte de strudelele copilariei",
        specs: {
            "Greutate": "40g",
            "Note": "Măr, Scorțișoară, Aluat",
            "Categorie": "Deserturi",
            "Tip Ceară": "Soia"
        }
    },
    {
        id: 14,
        name: "Coronita de Craciun",
        price: 5,
        image: "poze/coronita_craciun.png", 
        image2: "poze/coronita_craciun_2.png",
        desc: "Un miros ce iti aduce aminte de masa de Craciun in familie.",
        specs: {
            "Greutate": "55g",
            "Diametru": "6 cm",
            "Aromă": "Brad, Condimente",
            "Formă": "Coroniță"
        }
    },
    {
        id: 15,
        name: "Crema parfumata de Lamaie",
        price: 5,
        image: "poze/crema_lamaie.png", 
        image2: "poze/crema_lamaie_2.png",
        desc: "O crema fina de lamaie.",
        specs: {
            "Greutate": "40g",
            "Aromă": "Citrice / Fresh",
            "Culoare": "Galben pastel",
            "Textură": "Mată"
        }
    },
    {
        id: 16,
        name: "Magnolie si Cirese",
        price: 5,
        image: "poze/magnolie_cirese.png", 
        image2: "poze/magnolie_cirese_2.png",
        desc: "Mireasma florilor de magnolie si cirese.",
        specs: {
            "Greutate": "40g",
            "Aromă": "Floral / Fructat",
            "Formă": "Floare",
            "Culoare": "Roz pal"
        }
    },
    {
        id: 17,
        name: "Dimineti magice de Craciun",
        price: 5,
        image: "poze/dimineti_craciun.png", 
        image2: "poze/dimineti_craciun_2.png",
        desc: "Atmosfera proaspătă și revigorantă a dimineților de iarnă.",
        specs: {
            "Greutate": "45g",
            "Aromă": "Mentă / Eucalipt",
            "Formă": "Fulg de nea",
            "Colecție": "Iarnă"
        }
    },
    {
        id: 18,
        name: "Tableta Pepene galben si Castravete",
        price: 15,
        image: "poze/pepenegalben_castravete.png", 
        image2: "poze/pepenegalben_castravete_2.png",
        desc: "O combinație fresh de vară, pepene dulce și castravete răcoritor.",
        specs: {
            "Greutate": "80g",
            "Tip": "Tabletă parfumată",
            "Aromă": "Fresh / Acvatic",
            "Decor": "Flori uscate"
        }
    },
    {
        id: 19,
        name: "Tableta Cacao si Patchouli",
        price: 15,
        image: "poze/cacao_patchouli.png", 
        image2: "poze/cacao_patchouli_2.png",
        desc: "O combinatie de arome realizata din Cacao si flori Patchouli.",
        specs: {
            "Greutate": "80g",
            "Tip": "Tabletă parfumată",
            "Note": "Pământiu / Dulce",
            "Decor": "Boabe cacao"
        }
    },
    {
        id: 11,
        name: "Ciocolată & Portocale",
        price: 5,
        image: "poze/cioco_porto.png",
        image2: "poze/cioco_porto_2.png",
        desc: "Dulce și primitoare.",
        specs: {
            "Greutate": "40g",
            "Aromă": "Dulce / Citric",
            "Formă": "Pralină",
            "Culoare": "Maro închis"
        }
    }
];
