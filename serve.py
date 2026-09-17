#!/usr/bin/env python3
"""本地静态服务器：支持 /c/{code} 渠道 path 重写到 /index.html。

生产环境由 Cloudflare Pages 的 _redirects 实现同样效果，
本地用此脚本模拟，便于测试渠道推广链接。
"""
import http.server
import socketserver

PORT = 8080


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?')[0]
        parts = [p for p in path.split('/') if p]
        # /c/{code} 或 /c/{code}/xxx 重写到 /index.html（URL 保持不变）
        if parts and parts[0] == 'c':
            query = '?' + self.path.split('?', 1)[1] if '?' in self.path else ''
            self.path = '/index.html' + query
        super().do_GET()

    def log_message(self, format, *args):
        pass  # 静默日志


if __name__ == '__main__':
    with socketserver.TCPServer(('0.0.0.0', PORT), Handler) as httpd:
        print(f'本地前端已启动: http://localhost:{PORT}')
        print('渠道推广链接示例: http://localhost:{}/c/yelang'.format(PORT))
        httpd.serve_forever()
