module.exports = class LeftMenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        if (this.screenType == undefined) {
            this.screenType = 1;
        }
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes;

            CardService.bind(this.screenTypes.UPTODATE, () => {
                this.screenType = this.screenTypes.UPTODATE;
            });

            CardService.bind(this.screenTypes.ARCHIVE, () => {
                this.screenType = this.screenTypes.ARCHIVE;
            });

            CardService.bind(this.screenTypes.SEARCH, () => {
                this.setSearchItem = CardService.searchItem;
                this.screenType = this.screenTypes.SEARCH;
            });

            CardService.bind(this.screenTypes.RECYCLEBIN, () => {
                this.screenType = this.screenTypes.RECYCLEBIN;
            });

            CardService.bind(this.screenTypes.USER, () => {
                this.screenType = this.screenTypes.USER;
            });

            CardService.bind(this.screenTypes.PROFILE, () => {
                this.screenType = this.screenTypes.PROFILE;
            });
            
            CardService.bind(this.screenTypes.PRICELIST, () => {
                this.screenType = this.screenTypes.PRICELIST;
            });
        });

    }

    setItem(item) {
        this.cardService.setScreenType(item);
    }

    newShoppingCard() {
        this.cardService.createNewShoppingCard();
    }
}
