function community(app) {
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Changelog';
    app.search.input.style.display = 'none';
            app.main.support = app.createElement(
        'div', 
        [
            app.createElement('section', [
                app.createElement('p', 'March 7, 2023', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
                    app.createElement('p', 'Added games: Drive Mad, Celeste(Web-ported version); Join discord <a href="https://discord.gg/YFQ9NtAsfM">here</a>; View full Diamond changelog <a href="https://diamond-changelog.glitch.me">here</a> ~ $yna', {
                        /* December 1 2022: I tired; Don\' want write this; Join discord <a href="https://discord.gg/Scfv6wKy">here</a>; Republished site; View full Diamond changelog <a href="https://diamond-changelog.glitch.me">here</a>;~ Sincerly: $yna/Finn*/
                        /*Nov 4 2022: Created this tab; Added a "squares" option in appearance <a href="#settings">Settings</a>; Hopefully more to come and here is some starting info: Proly only 3 updates can show here at a time, you can go to this site: <a href="https://diamond-changelog.glitch.me">Diamond Changelog</a> to view the full changelog of all Diamond updates; We are moving to diamond! if you have been wondering why I am saying Diamond instead of Incgonito that\'s why :);PS: Sry that it was down for so long while I was trying to publish this - Later Nov 4 2022: Made the <a href="https://https://discord.gg/d3V5ERPe">Official Diamond Discord Server</a>, also in the Diamond <a href="#settings">About Page</a> - Nov 17 2022: Made Ethan Mode appearance because he wanted his own theme so there it is~Sincerely: $yna/Finn*/style: {
                            'margin-bottom': '0'
                        }
                    }),
            ], {
                class: 'data-section'
            }),
            
        ]);
        app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function(){
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { community };
