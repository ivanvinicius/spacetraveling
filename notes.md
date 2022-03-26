 fallback 'true' means that the post will be render on client-side, accepting new requests from user. It can be bad for SEO and cause layout shift
 fallback 'blocking' means that the post will be render on server-side, accepting new requests from user
 fallback 'false' means 'not accept new render request', in addition to those already rendered, returning 404 for those ones