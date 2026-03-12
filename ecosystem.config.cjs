module.exports = {
  apps: [
    {
      name: 'robustrix',
      cwd: '/home/robustrix/htdocs/Robustrix',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 5000',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 5000,
      exp_backoff_restart_delay: 200,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      kill_timeout: 5000,
      listen_timeout: 30000,
      watch: false,
    },
  ],
};

