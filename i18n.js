here/* =========================================================
   RED SEA - INTERNATIONALIZATION SYSTEM
   js/i18n.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       SUPPORTED LANGUAGES
    ===================================================== */

    const LANGUAGES = {

        ar: {
            name: "العربية",
            nativeName: "العربية",
            direction: "rtl"
        },

        en: {
            name: "English",
            nativeName: "English",
            direction: "ltr"
        },

        fr: {
            name: "Français",
            nativeName: "Français",
            direction: "ltr"
        }

    };


    /* =====================================================
       DEFAULT LANGUAGE
    ===================================================== */

    const DEFAULT_LANGUAGE = "ar";

    const STORAGE_KEY = "redSeaLanguage";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        ar: {

            /* General */

            "app.name":
                "Red Sea",

            "general.loading":
                "جاري التحميل...",

            "general.save":
                "حفظ",

            "general.cancel":
                "إلغاء",

            "general.confirm":
                "تأكيد",

            "general.close":
                "إغلاق",

            "general.back":
                "رجوع",

            "general.next":
                "التالي",

            "general.done":
                "تم",

            "general.search":
                "بحث",

            "general.all":
                "الكل",

            "general.error":
                "حدث خطأ",

            "general.success":
                "تمت العملية بنجاح",


            /* Home */

            "home.title":
                "الرئيسية",

            "home.welcome":
                "أهلاً بيك 👋",

            "home.username":
                "جاري التحميل...",

            "home.wallet":
                "رصيد العملات",

            "home.charge":
                "+ شحن العملات",

            "home.searchPlaceholder":
                "ابحث عن غرفة أو مستخدم...",

            "home.categories":
                "التصنيفات",

            "home.categoryAll":
                "الكل",

            "home.categoryFriends":
                "أصدقاء",

            "home.categoryMusic":
                "🎵 موسيقى",

            "home.categoryGames":
                "🎮 ألعاب",

            "home.categoryVip":
                "👑 VIP",

            "home.liveRooms":
                "الغرف الصوتية المباشرة",

            "home.seeAll":
                "عرض الكل",

            "home.noRooms":
                "لا توجد غرف مطابقة للبحث 🔎",

            "home.shortcuts":
                "اختصارات",

            "home.walletShortcut":
                "المحفظة",

            "home.giftsShortcut":
                "الهدايا",

            "home.vipShortcut":
                "VIP",

            "home.profileShortcut":
                "حسابي",


            /* Bottom Navigation */

            "nav.home":
                "الرئيسية",

            "nav.rooms":
                "الغرف",

            "nav.wallet":
                "المحفظة",

            "nav.gifts":
                "الهدايا",

            "nav.profile":
                "حسابي",

            "nav.chat":
                "الدردشة",


            /* Rooms */

            "rooms.title":
                "الغرف",

            "rooms.live":
                "مباشر",

            "rooms.members":
                "الأعضاء",

            "rooms.create":
                "إنشاء غرفة",

            "rooms.join":
                "دخول الغرفة",

            "rooms.noRooms":
                "لا توجد غرف حاليًا",

            "rooms.createFirst":
                "كن أول من ينشئ غرفة",


            /* Wallet */

            "wallet.title":
                "المحفظة",

            "wallet.balance":
                "رصيد العملات",

            "wallet.charge":
                "شحن العملات",

            "wallet.transactions":
                "المعاملات",

            "wallet.noTransactions":
                "لا توجد معاملات",


            /* Gifts */

            "gifts.title":
                "الهدايا",

            "gifts.send":
                "إرسال هدية",

            "gifts.receive":
                "الهدايا المستلمة",

            "gifts.myGifts":
                "هداياي",


            /* VIP */

            "vip.title":
                "VIP",

            "vip.level":
                "مستوى VIP",

            "vip.benefits":
                "مميزات VIP",

            "vip.upgrade":
                "ترقية VIP",


            /* Profile */

            "profile.title":
                "حسابي",

            "profile.edit":
                "تعديل الحساب",

            "profile.userId":
                "رقم المستخدم",

            "profile.name":
                "الاسم",

            "profile.email":
                "البريد الإلكتروني",

            "profile.agency":
                "الوكالة",

            "profile.noAgency":
                "لا توجد وكالة",


            /* Settings */

            "settings.title":
                "الإعدادات",

            "settings.account":
                "الحساب",

            "settings.language":
                "اللغة",

            "settings.languageTitle":
                "اختيار اللغة",

            "settings.notifications":
                "الإشعارات",

            "settings.privacy":
                "الخصوصية",

            "settings.logout":
                "تسجيل الخروج",


            /* Languages */

            "language.ar":
                "العربية",

            "language.en":
                "English",

            "language.fr":
                "Français",


            /* Login */

            "login.title":
                "تسجيل الدخول",

            "login.email":
                "البريد الإلكتروني",

            "login.password":
                "كلمة المرور",

            "login.remember":
                "تذكرني",

            "login.button":
                "تسجيل الدخول",

            "login.createAccount":
                "إنشاء حساب",

            "login.forgotPassword":
                "نسيت كلمة المرور؟",


            /* Register */

            "register.title":
                "إنشاء حساب",

            "register.name":
                "الاسم",

            "register.email":
                "البريد الإلكتروني",

            "register.password":
                "كلمة المرور",

            "register.confirmPassword":
                "تأكيد كلمة المرور",

            "register.button":
                "إنشاء الحساب",

            "register.login":
                "لديك حساب بالفعل؟ تسجيل الدخول",


            /* Messages */

            "message.logout":
                "هل تريد تسجيل الخروج؟",

            "message.languageChanged":
                "تم تغيير اللغة",

            "message.noInternet":
                "تأكد من اتصالك بالإنترنت",

            "message.tryAgain":
                "حاول مرة أخرى"

        },


        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            "app.name":
                "Red Sea",

            "general.loading":
                "Loading...",

            "general.save":
                "Save",

            "general.cancel":
                "Cancel",

            "general.confirm":
                "Confirm",

            "general.close":
                "Close",

            "general.back":
                "Back",

            "general.next":
                "Next",

            "general.done":
                "Done",

            "general.search":
                "Search",

            "general.all":
                "All",

            "general.error":
                "Something went wrong",

            "general.success":
                "Operation completed successfully",


            /* Home */

            "home.title":
                "Home",

            "home.welcome":
                "Welcome 👋",

            "home.username":
                "Loading...",

            "home.wallet":
                "Coin Balance",

            "home.charge":
                "+ Charge Coins",

            "home.searchPlaceholder":
                "Search for a room or user...",

            "home.categories":
                "Categories",

            "home.categoryAll":
                "All",

            "home.categoryFriends":
                "Friends",

            "home.categoryMusic":
                "🎵 Music",

            "home.categoryGames":
                "🎮 Games",

            "home.categoryVip":
                "👑 VIP",

            "home.liveRooms":
                "Live Voice Rooms",

            "home.seeAll":
                "See All",

            "home.noRooms":
                "No matching rooms found 🔎",

            "home.shortcuts":
                "Shortcuts",

            "home.walletShortcut":
                "Wallet",

            "home.giftsShortcut":
                "Gifts",

            "home.vipShortcut":
                "VIP",

            "home.profileShortcut":
                "My Account",


            /* Navigation */

            "nav.home":
                "Home",

            "nav.rooms":
                "Rooms",

            "nav.wallet":
                "Wallet",

            "nav.gifts":
                "Gifts",

            "nav.profile":
                "Account",

            "nav.chat":
                "Chat",


            /* Rooms */

            "rooms.title":
                "Rooms",

            "rooms.live":
                "LIVE",

            "rooms.members":
                "Members",

            "rooms.create":
                "Create Room",

            "rooms.join":
                "Join Room",

            "rooms.noRooms":
                "No rooms available",

            "rooms.createFirst":
                "Be the first to create a room",


            /* Wallet */

            "wallet.title":
                "Wallet",

            "wallet.balance":
                "Coin Balance",

            "wallet.charge":
                "Charge Coins",

            "wallet.transactions":
                "Transactions",

            "wallet.noTransactions":
                "No transactions",


            /* Gifts */

            "gifts.title":
                "Gifts",

            "gifts.send":
                "Send Gift",

            "gifts.receive":
                "Received Gifts",

            "gifts.myGifts":
                "My Gifts",


            /* VIP */

            "vip.title":
                "VIP",

            "vip.level":
                "VIP Level",

            "vip.benefits":
                "VIP Benefits",

            "vip.upgrade":
                "Upgrade VIP",


            /* Profile */

            "profile.title":
                "My Account",

            "profile.edit":
                "Edit Profile",

            "profile.userId":
                "User ID",

            "profile.name":
                "Name",

            "profile.email":
                "Email",

            "profile.agency":
                "Agency",

            "profile.noAgency":
                "No Agency",


            /* Settings */

            "settings.title":
                "Settings",

            "settings.account":
                "Account",

            "settings.language":
                "Language",

            "settings.languageTitle":
                "Choose Language",

            "settings.notifications":
                "Notifications",

            "settings.privacy":
                "Privacy",

            "settings.logout":
                "Log Out",


            /* Languages */

            "language.ar":
                "العربية",

            "language.en":
                "English",

            "language.fr":
                "Français",


            /* Login */

            "login.title":
                "Login",

            "login.email":
                "Email",

            "login.password":
                "Password",

            "login.remember":
                "Remember me",

            "login.button":
                "Login",

            "login.createAccount":
                "Create Account",

            "login.forgotPassword":
                "Forgot password?",


            /* Register */

            "register.title":
                "Create Account",

            "register.name":
                "Name",

            "register.email":
                "Email",

            "register.password":
                "Password",

            "register.confirmPassword":
                "Confirm Password",

            "register.button":
                "Create Account",

            "register.login":
                "Already have an account? Login",


            /* Messages */

            "message.logout":
                "Do you want to log out?",

            "message.languageChanged":
                "Language changed",

            "message.noInternet":
                "Check your internet connection",

            "message.tryAgain":
                "Try again"

        },


        /* =================================================
           FRENCH
        ================================================= */

        fr: {

            "app.name":
                "Red Sea",

            "general.loading":
                "Chargement...",

            "general.save":
                "Enregistrer",

            "general.cancel":
                "Annuler",

            "general.confirm":
                "Confirmer",

            "general.close":
                "Fermer",

            "general.back":
                "Retour",

            "general.next":
                "Suivant",

            "general.done":
                "Terminé",

            "general.search":
                "Rechercher",

            "general.all":
                "Tous",

            "general.error":
                "Une erreur s'est produite",

            "general.success":
                "Opération réussie",


            /* Home */

            "home.title":
                "Accueil",

            "home.welcome":
                "Bienvenue 👋",

            "home.username":
                "Chargement...",

            "home.wallet":
                "Solde de pièces",

            "home.charge":
                "+ Recharger les pièces",

            "home.searchPlaceholder":
                "Rechercher une salle ou un utilisateur...",

            "home.categories":
                "Catégories",

            "home.categoryAll":
                "Tous",

            "home.categoryFriends":
                "Amis",

            "home.categoryMusic":
                "🎵 Musique",

            "home.categoryGames":
                "🎮 Jeux",

            "home.categoryVip":
                "👑 VIP",

            "home.liveRooms":
                "Salons vocaux en direct",

            "home.seeAll":
                "Voir tout",

            "home.noRooms":
                "Aucun salon correspondant 🔎",

            "home.shortcuts":
                "Raccourcis",

            "home.walletShortcut":
                "Portefeuille",

            "home.giftsShortcut":
                "Cadeaux",

            "home.vipShortcut":
                "VIP",

            "home.profileShortcut":
                "Mon compte",


            /* Navigation */

            "nav.home":
                "Accueil",

            "nav.rooms":
                "Salons",

            "nav.wallet":
                "Portefeuille",

            "nav.gifts":
                "Cadeaux",

            "nav.profile":
                "Compte",

            "nav.chat":
                "Discussion",


            /* Rooms */

            "rooms.title":
                "Salons",

            "rooms.live":
                "EN DIRECT",

            "rooms.members":
                "Membres",

            "rooms.create":
                "Créer un salon",

            "rooms.join":
                "Rejoindre le salon",

            "rooms.noRooms":
                "Aucun salon disponible",

            "rooms.createFirst":
                "Soyez le premier à créer un salon",


            /* Wallet */

            "wallet.title":
                "Portefeuille",

            "wallet.balance":
                "Solde de pièces",

            "wallet.charge":
                "Recharger les pièces",

            "wallet.transactions":
                "Transactions",

            "wallet.noTransactions":
                "Aucune transaction",


            /* Gifts */

            "gifts.title":
                "Cadeaux",

            "gifts.send":
                "Envoyer un cadeau",

            "gifts.receive":
                "Cadeaux reçus",

            "gifts.myGifts":
                "Mes cadeaux",


            /* VIP */

            "vip.title":
                "VIP",

            "vip.level":
                "Niveau VIP",

            "vip.benefits":
                "Avantages VIP",

            "vip.upgrade":
                "Améliorer VIP",


            /* Profile */

            "profile.title":
                "Mon compte",

            "profile.edit":
                "Modifier le profil",

            "profile.userId":
                "ID utilisateur",

            "profile.name":
                "Nom",

            "profile.email":
                "E-mail",

            "profile.agency":
                "Agence",

            "profile.noAgency":
                "Aucune agence",


            /* Settings */

            "settings.title":
                "Paramètres",

            "settings.account":
                "Compte",

            "settings.language":
                "Langue",

            "settings.languageTitle":
                "Choisir la langue",

            "settings.notifications":
                "Notifications",

            "settings.privacy":
                "Confidentialité",

            "settings.logout":
                "Se déconnecter",


            /* Languages */

            "language.ar":
                "العربية",

            "language.en":
                "English",

            "language.fr":
                "Français",


            /* Login */

            "login.title":
                "Connexion",

            "login.email":
                "E-mail",

            "login.password":
                "Mot de passe",

            "login.remember":
                "Se souvenir de moi",

            "login.button":
                "Se connecter",

            "login.createAccount":
                "Créer un compte",

            "login.forgotPassword":
                "Mot de passe oublié ?",


            /* Register */

            "register.title":
                "Créer un compte",

            "register.name":
                "Nom",

            "register.email":
                "E-mail",

            "register.password":
                "Mot de passe",

            "register.confirmPassword":
                "Confirmer le mot de passe",

            "register.button":
                "Créer le compte",

            "register.login":
                "Vous avez déjà un compte ? Connexion",


            /* Messages */

            "message.logout":
                "Voulez-vous vous déconnecter ?",

            "message.languageChanged":
                "Langue modifiée",

            "message.noInternet":
                "Vérifiez votre connexion Internet",

            "message.tryAgain":
                "Réessayer"

        }

    };


    /* =====================================================
       SAFE STORAGE
    ===================================================== */

    function getSavedLanguage() {

        try {

            if (
                typeof localStorage !== "undefined" &&
                localStorage !== null
            ) {

                const saved =
                    localStorage.getItem(
                        STORAGE_KEY
                    );

                if (
                    saved &&
                    LANGUAGES[saved]
                ) {

                    return saved;

                }

            }

        } catch (error) {

            console.warn(
                "Red Sea i18n: localStorage unavailable"
            );

        }

        return DEFAULT_LANGUAGE;

    }


    function saveLanguage(language) {

        try {

            if (
                typeof localStorage !== "undefined" &&
                localStorage !== null
            ) {

                localStorage.setItem(
                    STORAGE_KEY,
                    language
                );

            }

        } catch (error) {

            console.warn(
                "Red Sea i18n: Could not save language"
            );

        }

    }


    /* =====================================================
       CURRENT LANGUAGE
    ===================================================== */

    let currentLanguage =
        getSavedLanguage();


    /* =====================================================
       TRANSLATE
    ===================================================== */

    function translate(key) {

        const language =
            translations[currentLanguage];

        if (
            language &&
            language[key] !== undefined
        ) {

            return language[key];

        }


        /* Fallback to Arabic */

        if (
            translations.ar[key] !== undefined
        ) {

            return translations.ar[key];

        }


        /* If key doesn't exist */

        return key;

    }


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage(language) {

        if (
            !LANGUAGES[language]
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        currentLanguage =
            language;


        saveLanguage(
            currentLanguage
        );


        const languageInfo =
            LANGUAGES[currentLanguage];


        /* HTML language */

        document.documentElement
            .setAttribute(
                "lang",
                currentLanguage
            );


        /* RTL / LTR */

        document.documentElement
            .setAttribute(
                "dir",
                languageInfo.direction
            );


        document.body
            .setAttribute(
                "dir",
                languageInfo.direction
            );


        /* =============================================
           TEXT
        ============================================= */

        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function(element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );


                    element.textContent =
                        translate(key);

                }
            );


        /* =============================================
           PLACEHOLDER
        ============================================= */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function(element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-placeholder"
                        );


                    element.setAttribute(
                        "placeholder",
                        translate(key)
                    );

                }
            );


        /* =============================================
           TITLE
        ============================================= */

        document
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(
                function(element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-title"
                        );


                    element.setAttribute(
                        "title",
                        translate(key)
                    );

                }
            );


        /* =============================================
           ARIA LABEL
        ============================================= */

        document
            .querySelectorAll(
                "[data-i18n-aria]"
            )
            .forEach(
                function(element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-aria"
                        );


                    element.setAttribute(
                        "aria-label",
                        translate(key)
                    );

                }
            );


        /* =============================================
           DOCUMENT TITLE
        ============================================= */

        const pageTitle =
            document.body.getAttribute(
                "data-page-title"
            );


        if (pageTitle) {

            document.title =
                translate(pageTitle);

        }


        /* =============================================
           EVENT
        ============================================= */

        window.dispatchEvent(
            new CustomEvent(
                "redSeaLanguageChanged",
                {
                    detail: {
                        language:
                            currentLanguage,

                        direction:
                            languageInfo.direction
                    }
                }
            )
        );

    }


    /* =====================================================
       SET LANGUAGE
    ===================================================== */

    function setLanguage(language) {

        if (
            !LANGUAGES[language]
        ) {

            console.warn(
                "Unsupported language:",
                language
            );

            return;

        }


        applyLanguage(
            language
        );

    }


    /* =====================================================
       GET LANGUAGE
    ===================================================== */

    function getLanguage() {

        return currentLanguage;

    }


    /* =====================================================
       GET LANGUAGE INFO
    ===================================================== */

    function getLanguageInfo() {

        return LANGUAGES[
            currentLanguage
        ];

    }


    /* =====================================================
       GET ALL LANGUAGES
    ===================================================== */

    function getLanguages() {

        return LANGUAGES;

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initialize() {

        applyLanguage(
            currentLanguage
        );

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.RedSeaI18n = {

        t:
            translate,

        setLanguage:
            setLanguage,

        getLanguage:
            getLanguage,

        getLanguageInfo:
            getLanguageInfo,

        getLanguages:
            getLanguages,

        applyLanguage:
            applyLanguage,

        initialize:
            initialize

    };


    /* =====================================================
       AUTO START
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


})();
