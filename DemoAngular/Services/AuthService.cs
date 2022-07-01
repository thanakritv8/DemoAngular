using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DemoAngular.Models;
using Microsoft.IdentityModel.Tokens;
namespace DemoAngular.Services
{
    public class AuthService
    {
        public static string Sha256Hash(string value)
        {
            string finalKey = string.Empty;
            byte[] encode = new byte[value.Length];
            encode = Encoding.UTF8.GetBytes(value + Startup.Secret);
            finalKey = Convert.ToBase64String(encode);
            return finalKey;
        }

        public static string CreateToken(ResultLogin user)
        {
            var key = Encoding.ASCII.GetBytes(Startup.Secret);
            var tokenHandler = new JwtSecurityTokenHandler();
            var descriptor = new SecurityTokenDescriptor
            {
                Subject = getClaimsIdentity(user),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };
            var token = tokenHandler.CreateToken(descriptor);

            return tokenHandler.WriteToken(token);

        }

        public static ClaimsIdentity getClaimsIdentity(ResultLogin user)
        {
            return new ClaimsIdentity(
                getClaims()
                );

            Claim[] getClaims()
            {
                List<Claim> claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, user.UserId.ToString()));
                foreach (var item in user.Roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, item.Code));
                }
                return claims.ToArray();
            }

        }

        public static string CreateRandomPassword(int length = 15)
        {
            string validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?_-";
            Random random = new Random();
            char[] chars = new char[length];
            for (int i = 0; i < length; i++)
            {
                chars[i] = validChars[random.Next(0, validChars.Length)];
            }
            return new string(chars);
        }
    }
}

