using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      
      Console.Write("What is your secret message?");
      string message = Console.ReadLine();
      
      char[] secretMessage = message.ToCharArray();
      
      char[] encryptedMessage = new char[secretMessage.Length];
      
      for (int i = 0; i < secretMessage.Length; i++){
        char character = secretMessage[i];
        int alpha = Array.IndexOf(alphabet, character);
        int newAlpha = (alpha + 3) % alphabet.Length;
        char encrypted = alphabet[newAlpha];
        encryptedMessage[i] = encrypted;
      }
      string encryptedString = String.Join("", encryptedMessage);
      Console.Write(encryptedString);
      
    }
  }
}