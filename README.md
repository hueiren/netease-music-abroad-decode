# netease-music-abroad-decode
Javascript decoder for HTTP responses when netease music thinks you are from abroad.

## Build

```bash
# sudo npm i -g vercel
# vercel login
vercel dev
```

## Usage

Send request with raw message netease music returns as HTTP request body.

Deployed [here](https://netease-music-abroad-decode.vercel.app/api/decode)

* Set `Content-Type` to `text/plain`.

```python
request_header = {
    "Content-Type": "text/plain"
}
```

![Example](./readme_img/usage_postman.png)
