describe("EpubReflowable.ReflowablePagination", function () {

    describe("reflowable pagination", function () { 

        beforeEach(function () {
            this.pages = new EpubReflowable.ReflowablePagination();
        });

        describe('toggling synthetic spread', function () {

            describe("left-to-right page progression", function () {

                it('1 page -> 2 pages', function () {

                    this.pages.set({
                        num_pages: 10,
                        current_page: [2]
                    });

                    var twoUp = false;
                    var firstPageIsOffset = false;

                    this.pages.toggleTwoUp(twoUp, firstPageIsOffset);
                    expect(this.pages.get('current_page')).toEqual([1, 2]);
                });

                it('2 pages -> 1 page', function () {

                    this.pages.set({
                        num_pages: 10,
                        current_page: [1, 2]
                    });

                    var twoUp = true;
                    var firstPageIsOffset = false;

                    this.pages.toggleTwoUp(twoUp, firstPageIsOffset);
                    expect(this.pages.get('current_page')).toEqual([1]);
                });
            });
            
            describe("right-to-left page progression", function () {

                it('1 page -> 2 pages', function () {

                    this.pages.set({
                        num_pages: 10,
                        current_page: [2]
                    });

                    var twoUp = false;
                    var firstPageIsOffset = false;

                    this.pages.toggleTwoUp(twoUp, firstPageIsOffset);
                    expect(this.pages.get('current_page')).toEqual([1, 2]);
                });

                it('2 pages -> 1 page', function () {

                    this.pages.set({
                        num_pages: 10,
                        current_page: [1, 2]
                    });

                    var twoUp = true;
                    var firstPageIsOffset = false;

                    this.pages.toggleTwoUp(twoUp, firstPageIsOffset);
                    expect(this.pages.get('current_page')).toEqual([1]);
                });
            });
        });

        describe('1 page navigation', function () {
        
            beforeEach(function () {
                
                this.pages.set({
                    num_pages: 10,
                    current_page: [2]
                });
            });

            it('increments the page number if there are more pages', function () {

                var twoUp = false;
                this.pages.nextPage(twoUp);
                expect(this.pages.get("current_page")).toEqual([3]);
            });

            it('decrements the page number if there are more pages', function () {

                var twoUp = false;
                this.pages.prevPage(twoUp);
                expect(this.pages.get("current_page")).toEqual([1]);
            });
        });

        describe('2 page navigation', function () {

            beforeEach(function () {
                
                this.pages.set({
                    num_pages: 10,
                    current_page: [3, 4]
                });
            });

            it('increments the page number if there are more pages', function () {

                var twoUp = true;
                var pageProgressionDirection = "ltr";
                this.pages.nextPage(twoUp);
                expect(this.pages.get("current_page")).toEqual([5, 6]);
            });

            it('decrements the page number if there are more pages', function () {

                var twoUp = true;
                var pageProgressionDirection = "ltr";
                this.pages.prevPage(twoUp);
                expect(this.pages.get("current_page")).toEqual([1, 2]);
            });
        });
    });
});
