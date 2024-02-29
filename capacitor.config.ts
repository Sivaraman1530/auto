import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.auto',
  appName: 'auto',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      autoDeleteFailed: true,
      autoDeletePrevious: true,
			autoUpdate: true,
      defaultChannel: "production",
      privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAwGw0hDx1vMrnl0dotE3eknAoDVY8TPdSepLMibTF9OD9WIgq\nVTw+7cOq/9hNSEIpDDDKR39JGZ2KqiS8LRkRilMevAqF+B+Ek8v6nRNV+i43LSi/\nKOjvCyF/KIxj7qkYc8trWVn+BwM0/FyX+0vKGN8/MZ2P8xNgrHpvZPY/1TBTIk7i\nx3SLv7ufF/2KUYxBia4bgHOM/T+5rFS8UAPkRLsl2CSX7VxAmvOnbI4GxJ1sM/sf\nJ29jfaVOrRYvuHf3hOpeHT7B3MA7U8Vv4EFtm7prgatmqX1Zl2kYGzi5VAVianmS\nGQMb9W2w6b7/HUkC6FX9xYRgTwW7857LknnqOwIDAQABAoIBABzKM8NTPnRsUWE/\nhGlxuyri0ANK00Pav0LqouK5ouKkJROxb9AH7wxo+bVE2i9FAto5lJJE9513Bk+1\nplgDB65QCGmvE2NP5+irHMiSo4sGjifaEFvhGh7quJlLBAqpzyhIF7wrLEhFURCv\nE+g76zV0dYKJZgfC7vRvbypGc7+ENE8M7h9u806kMJ/3JH4+Vwt9zaXuqnFhXQvh\nVstRQ0Yfh26lI+ksneoVcNYPfsF90Fs2VfjFJ6Ts902loZY2N66nQyTUp7F3v6BI\nI/Nvi+SIc1y0RYb3WV2YeKi09WdYfY0g6xPAakjH5io9F0lCroN3TafRwJZdY3Lg\n3GTjvlUCgYEA8SvDkAomiFtrAuiJq3/cZTWnSzm8DY67LQWVcJ2kwh4RnfyTfcL1\nodeyZuR3SXODAWaphlLny5ECY+966NNDhIv5YeQIx7TdxGPj1gJmDEPhePfUh0aL\nNRBxPGmEwTcHlKmgtQZ5b1Bsb/3PXnm9VF7TNB8++t5z76/LEZ8LycUCgYEAzEEa\nE3vdFzs7/bT8rSOQu43mBL8rgtMTtqOuvSGM2IRXlwWShgxCOTzAVXhS+Zmdo5Kf\nltfeP1n/w2tbC6/b1DbbgPqsxFuDqiw8Sx+fYD6a9QpuB9xFo8qGwKel/6aEWlqO\nvPfrzLMmiXVjDKaTMZTVWbWIkvSi7fM5ZWTuI/8CgYAycM/PMYBLpqskCZS5rN1g\nwa8CucmOIFsfmHpf+mi6POW8YFZMyFjth5qFkKUuVJ2CzoEIWhCm7+ZLFoxjY8RM\nVaZMBhCcDEURzT6axReo2w2uak8mF+gHqi+0zfD5JFROkIfPNNJzKKP1bGVRwi6K\nFecgkKRwfdRLvj2/qr8hbQKBgET/vQpV7nMZnINxL2ZhvFPPdKOn3M/99AvfsXjM\nq6K82kX3KO9Flt11C1gUJJuS7DDEqEqxs69c/MyMKJ6DEtTWj0I77D8M1yaWeOu7\nzAAcRgZ/NnpLS+8vzGOqfqYlH1LSgqONcMeewWbwE7zDTLgUGhqK+48BO0T8xCff\nd58LAoGAaiuzXY8KnNyrrLFU3Pct3LbPhkNrtKeezrZtKqVgcnVUsGsJLLBSQcYK\nBiv5OP4F8KVaZL3EU3wSEHRnDYamCu68SQANt35hYzw9UDYio/c1uJCQCijuwJ6x\nrWlSmnBgdFheOMxG+/yeGIC2xmQ2AaGJYtejGh7fziWE0YNnmko=\n-----END RSA PRIVATE KEY-----\n'
    }
  }
};

export default config;
