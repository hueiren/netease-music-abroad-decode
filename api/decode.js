
var j0x = String();

function cwl4p() {
    var CK0x = function (hp3x) {
        if (hp3x < -128) {
            return CK0x(128 - (-128 - hp3x))
        } else if (hp3x >= -128 && hp3x <= 127) {
            return hp3x
        } else if (hp3x > 127) {
            return CK0x(-129 + hp3x - 127)
        } else {
            throw new Error("1001")
        }
    };
    var cwk4o = function (hp3x, bn1x) {
        return CK0x(hp3x + bn1x)
    };
    var cvP4T = function (bfR7K, ble8W) {
        if (bfR7K == null) {
            return null
        }
        if (ble8W == null) {
            return bfR7K
        }
        var rG6A = [];
        var cvF4J = ble8W.length;
        for (var i = 0, bt1x = bfR7K.length; i < bt1x; i++) {
            rG6A[i] = cwk4o(bfR7K[i], ble8W[i % cvF4J])
        }
        return rG6A
    };
    var cvE4I = function (bfQ7J) {
        if (bfQ7J == null) {
            return bfQ7J
        }
        var rG6A = [];
        var cvq4u = bfQ7J.length;
        for (var i = 0, bt1x = cvq4u; i < bt1x; i++) {
            rG6A[i] = CK0x(0 - bfQ7J[i])
        }
        return rG6A
    };
    var cvl4p = function (bls8k, WR5W) {
        bls8k = CK0x(bls8k);
        WR5W = CK0x(WR5W);
        return CK0x(bls8k ^ WR5W)
    };
    var bUY8Q = function (WS5X, blA9r) {
        if (WS5X == null || blA9r == null || WS5X.length != blA9r.length) {
            return WS5X
        }
        var rG6A = [];
        var cvj4n = WS5X.length;
        for (var i = 0, bt1x = cvj4n; i < bt1x; i++) {
            rG6A[i] = cvl4p(WS5X[i], blA9r[i])
        }
        return rG6A
    };
    var bUS8K = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var cuQ4U = function (du2x) {
        var Nw2x = [];
        Nw2x.push(bUS8K[du2x >>> 4 & 15]);
        Nw2x.push(bUS8K[du2x & 15]);
        return Nw2x.join("")
    };
    var bUH8z = function (vV8N) {
        var bt1x = vV8N.length;
        if (vV8N == null || bt1x < 0) {
            return new String("")
        }
        var Nw2x = [];
        for (var i = 0; i < bt1x; i++) {
            Nw2x.push(cuQ4U(vV8N[i]))
        }
        return Nw2x.join("")
    };
    var bUD8v = function (bfL7E) {
        if (bfL7E == null || bfL7E.length == 0) {
            return bfL7E
        }
        var blM9D = new String(bfL7E);
        var rG6A = [];
        var bt1x = blM9D.length / 2;
        var bn1x = 0;
        for (var i = 0; i < bt1x; i++) {
            var qi5n = parseInt(blM9D.charAt(bn1x++), 16) << 4;
            var qh5m = parseInt(blM9D.charAt(bn1x++), 16);
            rG6A[i] = CK0x(qi5n + qh5m)
        }
        return rG6A
    };
    var bUC8u = function (cS1x) {
        if (cS1x == null || cS1x == undefined) {
            return cS1x
        }
        var Xu5z = encodeURIComponent(cS1x);
        var vV8N = [];
        var bUB8t = Xu5z.length;
        for (var i = 0; i < bUB8t; i++) {
            if (Xu5z.charAt(i) == "%") {
                if (i + 2 < bUB8t) {
                    vV8N.push(bUD8v(Xu5z.charAt(++i) + "" + Xu5z.charAt(++i))[0])
                } else {
                    throw new Error("1009")
                }
            } else {
                vV8N.push(Xu5z.charCodeAt(i))
            }
        }
        return vV8N
    };
    var cuF4J = function (zq9h) {
        var bd0x = 0;
        bd0x += (zq9h[0] & 255) << 24;
        bd0x += (zq9h[1] & 255) << 16;
        bd0x += (zq9h[2] & 255) << 8;
        bd0x += zq9h[3] & 255;
        return bd0x
    };
    var cOh8Z = function (bd0x) {
        var zq9h = [];
        zq9h[0] = bd0x >>> 24 & 255;
        zq9h[1] = bd0x >>> 16 & 255;
        zq9h[2] = bd0x >>> 8 & 255;
        zq9h[3] = bd0x & 255;
        return zq9h
    };
    var cuA4E = function (da2x, bms9j, bt1x) {
        var dN2x = [];
        if (da2x == null || da2x.length == 0) {
            return dN2x
        }
        if (da2x.length < bt1x) {
            throw new Error("1003")
        }
        for (var i = 0; i < bt1x; i++) {
            dN2x[i] = da2x[bms9j + i]
        }
        return dN2x
    };
    var bmv9m = function (da2x, bms9j, sH6B, cuz4D, bt1x) {
        if (da2x == null || da2x.length == 0) {
            return sH6B
        }
        if (sH6B == null) {
            throw new Error("1004")
        }
        if (da2x.length < bt1x) {
            throw new Error("1003")
        }
        for (var i = 0; i < bt1x; i++) {
            sH6B[cuz4D + i] = da2x[bms9j + i]
        }
        return sH6B
    };
    var cuy4C = function (bt1x) {
        var bu1x = [];
        for (var i = 0; i < bt1x; i++) {
            bu1x[i] = 0
        }
        return bu1x
    };
    var cux4B = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
    var NA2x = 64;
    var bfF7y = 64;
    var bUx8p = 4;
    var cus4w = function (rO6I) {
        var bUw8o = [];
        if (rO6I == null || rO6I == undefined || rO6I.length == 0) {
            return cuy4C(bfF7y)
        }
        if (rO6I.length >= bfF7y) {
            return cuA4E(rO6I, 0, bfF7y)
        } else {
            for (var i = 0; i < bfF7y; i++) {
                bUw8o[i] = rO6I[i % rO6I.length]
            }
        }
        return bUw8o
    };
    var cuq4u = function (bfE7x) {
        if (bfE7x == null || bfE7x.length % NA2x != 0) {
            throw new Error("1005")
        }
        var bmW9N = [];
        var bn1x = 0;
        var cuo4s = bfE7x.length / NA2x;
        for (var i = 0; i < cuo4s; i++) {
            bmW9N[i] = [];
            for (var j = 0; j < NA2x; j++) {
                bmW9N[i][j] = bfE7x[bn1x++]
            }
        }
        return bmW9N
    };
    var cun4r = function (bUu8m) {
        var qi5n = bUu8m >>> 4 & 15;
        var qh5m = bUu8m & 15;
        var bn1x = qi5n * 16 + qh5m;
        return cux4B[bn1x]
    };
    var bUt8l = function (bnh9Y) {
        if (bnh9Y == null) {
            return null
        }
        var bUp8h = [];
        for (var i = 0, bt1x = bnh9Y.length; i < bt1x; i++) {
            bUp8h[i] = cun4r(bnh9Y[i])
        }
        return bUp8h
    };
    var bUm8e = function (NK3x, rO6I) {
        if (NK3x == null) {
            return null
        }
        if (NK3x.length == 0) {
            return []
        }
        if (NK3x.length % NA2x != 0) {
            throw new Error("1005")
        }
        rO6I = cus4w(rO6I);
        var bns9j = rO6I;
        var bnt9k = cuq4u(NK3x);
        var YE5J = [];
        var ctR3x = bnt9k.length;
        for (var i = 0; i < ctR3x; i++) {
            var bny9p = bUt8l(bnt9k[i]);
            bny9p = bUt8l(bny9p);
            var bnD9u = bUY8Q(bny9p, bns9j);
            var ctM3x = cvP4T(bnD9u, cvE4I(bns9j));
            bnD9u = bUY8Q(ctM3x, rO6I);
            bmv9m(bnD9u, 0, YE5J, i * NA2x, NA2x);
            bns9j = bnt9k[i]
        }
        var bUj8b = [];
        bmv9m(YE5J, YE5J.length - bUx8p, bUj8b, 0, bUx8p);
        var bt1x = cuF4J(bUj8b);
        if (bt1x > YE5J.length) {
            throw new Error("1006")
        }
        var rG6A = [];
        bmv9m(YE5J, 0, rG6A, 0, bt1x);
        return rG6A
    };
    var ctI3x = function (bfA7t, J0x) {
        if (bfA7t == null) {
            return null
        }
        var bUg8Y = new String(bfA7t);
        if (bUg8Y.length == 0) {
            return []
        }
        var NK3x = bUD8v(bUg8Y);
        if (J0x == null || J0x == undefined) {
            throw new Error("1007")
        }
        var rO6I = bUC8u(J0x);
        return bUm8e(NK3x, rO6I)
    };
    this.ctF3x = function (bfA7t, J0x) {
        var bnQ9H = ctI3x(bfA7t, J0x);
        var Gc1x = new String(bUH8z(bnQ9H));
        var Bs9j = [];
        var bnT9K = Gc1x.length / 2;
        var bn1x = 0;
        for (var i = 0; i < bnT9K; i++) {
            Bs9j.push("%");
            Bs9j.push(Gc1x.charAt(bn1x++));
            Bs9j.push(Gc1x.charAt(bn1x++))
        }
        return Bs9j.join("")
    };
    j0x.bVz8r = function (bnW9N, J0x) {
        return j0x.ctD3x(j0x.cFr6l(bnW9N), J0x)
    };
    j0x.ctD3x = function (bnW9N, J0x) {
        var bnQ9H = bUm8e(bnW9N, bUC8u(J0x));
        var Gc1x = new String(bUH8z(bnQ9H));
        var Bs9j = [];
        var bnT9K = Gc1x.length / 2;
        var bn1x = 0;
        for (var i = 0; i < bnT9K; i++) {
            Bs9j.push("%");
            Bs9j.push(Gc1x.charAt(bn1x++));
            Bs9j.push(Gc1x.charAt(bn1x++))
        }
        return Bs9j.join("")
    }
}
settmusic = (new cwl4p).ctF3x


// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    var request_body = req.body;

    source = request_body;
    key = "fuck~#$%^&*(458";
    var result_decrypted = settmusic(source, key)
    var result_json_string = decodeURIComponent(result_decrypted)
    // console.log(result_json_string)

    res.setHeader("Content-Type", "application/json");
    // Respond with a JSON string of all users in the collection
    res.send(result_json_string)
    res.status(200)
}