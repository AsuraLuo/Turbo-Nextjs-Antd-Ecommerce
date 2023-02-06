module.exports = {
  apps: [
    {
      name: 'Ecommerce Storefront',
      exec_mode: 'cluster',
      instances: 'max',
      args: 'start',
      script: './node_modules/next/dist/bin/next',
      watch: false,
      autorestart: true,
      combine_logs: true,
      exp_backoff_restart_delay: 100,
      ignore_watch: ['node_modules'],
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      // pid_file: './pm2/pid/ecommerce_storefront_pm.pid',
      error_file: './pm2/logs/ecommerce_storefront_err.log'
    }
  ]
}
