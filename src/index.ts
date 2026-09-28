export interface Env {
  // Cloudflare bindings will be added here as the architecture is implemented.
}

export default {
  async fetch(request: Request, _env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        service: "VeilCore",
        status: "ok"
      });
    }

    return Response.json({
      service: "VeilCore",
      status: "online"
    });
  }
};
