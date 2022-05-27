using System;
using System.Collections.Generic;
using System.Linq;
using static System.Text.Json.JsonSerializer;

namespace csharp
{
    class Program
    {


        static void Main(string[] args)
        {
            List<Guest> guestList = new List<Guest>
            {
                new Guest("Marilyn Monroe","entertainer","(1926 - 1962) American actress, singer, model"),
                new Guest("Abraham Lincoln","politician","(1809 - 1865) US President during American civil war"),
                new Guest("Martin Luther King","activist","(1929 - 1968)  American civil rights campaigner"),
                new Guest("Rosa Parks","activist","(1913 - 2005)  American civil rights activist"),
                new Guest("Peter Sellers","entertainer","(1925 - 1980) British actor and comedian"),
                new Guest("Alan Turing","computer scientist","(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"),
                new Guest("Admiral Grace Hopper","computer scientist","(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"),
                new Guest("Indira Gandhi","politician","(1917 - 1984) Prime Minister of India 1966 - 1977")
            };

            Dictionary<string, List<Guest>> tables = new Dictionary<string, List<Guest>>
            {
                {"Table 1", new List<Guest>()},
                {"Table 2", new List<Guest>()}
            };

            foreach (Guest guest in guestList)
            {
                List<string> table1Occupations = new List<string>();
                tables["Table 1"].ForEach(g => { table1Occupations.Add(g.Occupation); });
                if (table1Occupations.Any(o => o.Contains(guest.Occupation)))
                {
                    tables["Table 2"].Add(guest);
                } else {
                    tables["Table 1"].Add(guest);
                }
            }

            foreach(var table in tables)
            {   
                Console.WriteLine(table.Key);
                foreach(var guest in table.Value)
                {
                    Console.WriteLine($"{guest.Name} \n Occupation: {guest.Occupation} \n Bio: {guest.Bio}");
                }
            }


        }

        public class Guest
        {
            public string Name { get; }
            public string Occupation { get; }
            public string Bio { get; }

            public Guest(string n, string o, string b)
            {
                Name = n;
                Occupation = o;
                Bio = b;
            }

            public override string ToString()
            {
                return $"{Name}, {Occupation}, {Bio}";
            }
        }

        public class Table
        {
            public List<Guest> TableList { get; set; }
        }

    }
}
