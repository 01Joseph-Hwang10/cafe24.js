export class Cafe24APIError extends Error {
  public readonly status: number;
  public readonly statusText: string;

  static async fromResonse(response: Response) {
    let message: string;
    try {
      const responseBody = await response.json();
      message = responseBody?.error?.message;
    } catch (error) {
      message = await response.text();
    }
    return new Cafe24APIError({
      status: response.status,
      statusText: response.statusText,
      message,
    });
  }

  constructor(options: {
    status: number;
    statusText: string;
    message: string;
  }) {
    const { status, statusText, message } = options;
    super(message);
    this.status = status;
    this.statusText = statusText;
  }
}
