FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
CMD ["bun", "run", "--watch", "src/index.ts"]
EXPOSE 3002