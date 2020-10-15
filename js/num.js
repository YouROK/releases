function showModal(base64Element) {
    var el = JSON.parse(b64_to_utf8(base64Element));
    $('#infoTorrents').empty();
    $('#infoName').text(el.title + ' (' + el.year + ')');

    if (el.production_countries != null)
        var countres = el.production_countries.map(function (el) {
            return el.iso_3166_1
        }).join(", ");
    else
        var countres = el.origin_country.join(", ");

    var genres = el.genres.map(function (el) {
        return capitalize(el.name)
    }).join(", ");

    $('#infoNameOrig').text(el.original_title + " • " + genres + " • " + countres + " • " + el.id);
    var img = '<img src="' + el.backdrop_path + '" class="rounded leftimg"> <br>';
    var youtube =
        el.videos.results.map(function (trailer) {
            return '<iframe class="rounded leftimg" width="300" height="170" src="https://www.youtube.com/embed/' + trailer.key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }) + "<br><br>";
    $('#infoOverview').html(img + youtube + el.overview);
    $('#infoModal').modal('show');
    var torrHtml = '';
    for (var t in el.torrent) {
        torrHtml += '<small>' + el.torrent[t].date.substring(0, 10) + ' <b>' + el.torrent[t].name + '</b> <u>' + el.torrent[t].size + '</u> ⇑' + el.torrent[t].upload + ' ⇓' + el.torrent[t].download + '</small><br>';
    }
    $('#infoTorrents').html(torrHtml);
}

(function ($, document, window) {
    $(document).ready(function () {
        getContent("/releases/movies.json");
    })
})(jQuery, document, window);

$(function () {
    $("#btn_movies").click(function () {
        $("#movies").html("");
        document.title = 'Новые релизы: Фильмы';
        getContent("/releases/movies.json");
    });

    $("#btn_serials").click(function () {
        $("#movies").html("");
        document.title = 'Новые релизы: Сериалы';
        getContent("/releases/tv.json");
    });

    $("#btn_cartoons").click(function () {
        $("#movies").html("");
        document.title = 'Новые релизы: Мультфильмы';
        getContent("/releases/cartoons.json");
    });

    $("#btn_legends").click(function () {
        $("#movies").html("");
        document.title = 'Новые релизы: Легенды';
        getContent("/releases/legends.json");
    });
});

function getContent(linkJS) {
    $.getJSON(linkJS, function (data) {
        $("#last-update").text("Последние обновление: " + data.date + " " + data.time);


        var cont = $("#movies");
        data.items.forEach(element => {
            var b64Elem = utf8_to_b64(JSON.stringify(element));

            if (element.production_countries != null)
                var countres = element.production_countries.map(function (el) {
                    return el.iso_3166_1
                }).join(", ");
            else
                var countres = element.origin_country.join(", ");

            var genres = element.genres.map(function (el) {
                return capitalize(el.name)
            }).join(", ");

            var poster = element.poster_path;
            if (poster == "")
                poster = "/empty_poster.png"

            cont.append(
                `<div id="m` + element.id + `" onclick="showModal('` + b64Elem + `')">
            <div class="thumbnail shadow">
                <h3>` + element.title + ` (` + element.year + `)<br>
                    <span>` + element.vote_average.toFixed(2) + " • " + countres + `</span><br>
                    <small>` + genres + `</small>
                </h3>
                <img class="img-responsive" alt="` + element.title + `" src="` + poster + `">
            </div>
        </div>`
            );
        });
    });
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
