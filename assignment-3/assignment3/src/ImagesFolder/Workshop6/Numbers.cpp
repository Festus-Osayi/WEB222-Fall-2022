/*
*****************************************************************************
                        Workshop6 - Part1
Full Name  :    Festus Osayi
Student ID#:    170276216
Email      :    fosayi@myseneca.ca
Section    :    OOP244ZDD
Date	   :	10/25/2022
Authenticity Declaration:
I declare this submission is the result of my own work and has not been
shared with any other student or 3rd party content provider. This submitted
piece of work is entirely of my own creation, and only copied the code that
my professor provided to complete my workshops and assignments..
*****************************************************************************
*/

#define _CRT_SECURE_NO_WARNINGS
#include <cstring>
#include <fstream>
#include <iostream>
#include <iomanip>
#include <string>
#include "Numbers.h"
using namespace std;
namespace sdds
{
   Numbers::~Numbers()
   {
      save();
      deallocate();
   }

   bool Numbers::isEmpty() const
   {
      return m_numbers == nullptr;
   }

   void Numbers::setEmpty()
   {
      m_numbers = nullptr;
      m_filename = nullptr;
      m_numCount = 0;
   }

   void Numbers::deallocate()
   {
      delete[] m_filename;
      delete[] m_numbers;
   }

   void Numbers::setFilename(const char *filename)
   {
      delete[] m_filename;
      m_filename = new char[strlen(filename) + 1];
      strcpy(m_filename, filename);
   }

   double Numbers::average() const
   {
      double aver = 0.0;
      if (!isEmpty())
      {
         for (int i = 0; i < m_numCount; i++)
            aver += m_numbers[i];
         aver = aver / m_numCount;
      }
      return aver;
   }

   double Numbers::min() const
   {
      double minVal = 0.0;
      if (!isEmpty())
      {
         minVal = m_numbers[0];
         for (int i = 1; i < m_numCount; i++)
            if (minVal > m_numbers[i])
               minVal = m_numbers[i];
      }
      return minVal;
   }
   double Numbers::max() const
   {
      double maxVal = 0.0;
      if (!isEmpty())
      {
         maxVal = m_numbers[0];
         for (int i = 1; i < m_numCount; i++)
            if (maxVal < m_numbers[i])
               maxVal = m_numbers[i];
      }
      return maxVal;
   }

   Numbers::Numbers()
   {
      setEmpty();
      m_isOriginal = false;
   }

   Numbers::Numbers(const char *filename)
   {
      setEmpty();
      m_isOriginal = true;
      setFilename(filename);
      m_numCount = numberCount();
      if (m_numCount == 0 || !load())
      {
         deallocate();
         setEmpty();
         m_isOriginal = false;
      }
   }

   // // Sets the object to the safe empty state
   // - Sets the object NOT to be original (this will be done in next step)
   // - Assigns the current object to the **Numbers** object that is being copied. (calls the Copy Assignment Operator)
   Numbers::Numbers(const Numbers &other)
   {
      setEmpty();
      m_isOriginal = false;
      *this = other;
   }
   // deletes the current collection of the double values
   // - sets the object to the safe empty state.
   // - sets the object not to be original
   // - Allocates new memory pointed by m_numbers to the number of the values in the object that is being copied.
   // - Copies all the double values in the object that is being copied into the newly allocated memory.
   Numbers &Numbers::operator=(const Numbers &rhs)
   {
      delete[] m_numbers;
      setEmpty();
      m_isOriginal = false;

      m_numbers = new double[rhs.m_numCount];
      m_numCount = rhs.m_numCount;
      for (int i = 0; i < m_numCount; i++)
      {
         m_numbers[i] = rhs.m_numbers[i];
      }
      // sort(rhs.m_filename);
      return *this;
   }
   // Based on the value of the ascending argument, This private method will sort the numbers in ascending or descending order and then returns the reference of the current Numbers object.
   Numbers &Numbers::sort(bool ascending)
   {
      int x, y;
      int var_x, var_y;
      double ascend, descend;

      if (ascending == true)
      {
         for (x = this->m_numCount - 1; x > 0; x--)
         {
            for (y = 0; y < x; y++)
            {
               if (m_numbers[y] > m_numbers[y + 1])
               {
                  ascend = m_numbers[y];
                  m_numbers[y] = m_numbers[y + 1];
                  m_numbers[y + 1] = ascend;
               }
            }
         }
      }
      else if (ascending != true)
      {
         for (var_x = this->m_numCount - 1; var_x > 0; var_x--)
         {
            for (var_y = 0; var_y < var_x; var_y++)
            {
               if (m_numbers[var_y] < m_numbers[var_y + 1])
               {
                  descend = m_numbers[var_y];
                  m_numbers[var_y] = m_numbers[var_y + 1];
                  m_numbers[var_y + 1] = descend;
               }
            }
         }
      }

      return *this;
   }
   // This unary operator (that is incapable of modifying the current object) will return a descending sorted copy of the Numbers object.
   Numbers Numbers::operator-() const
   {
      bool success = false;
      Numbers temp(*this);
      if (success == false)
      {
         temp.sort(success);
      }

      return temp;
   }
   // This unary operator (that is incapable of modifying the current object) will return a descending sorted copy of the Numbers object.
   Numbers Numbers::operator+() const
   {
      bool success = true;
      Numbers temp(*this);
      if (success == true)
      {
         temp.sort(success);
      }

      return temp;
   }
   // This will return the number of lines in the data file (hence returning the number of double values in the file).
   int Numbers::numberCount() const
   {
      int inc = 0;
      string line;
      ifstream myfile;
      myfile.open(m_filename);
      if (myfile.is_open())
      {
         // if file is open and not fail --> Read each given line and increment the number of lines or value read
         while (getline(myfile, line, '\n'))
         {
            inc++;
         }
         myfile.close(); // optional but considers best practice..
      }

      return inc;
   }

   bool Numbers::load()
   {
      int i = 0;

      if (this->m_numCount > 0)
      {
         this->m_numbers = new double[m_numCount];
         ifstream file;
         file.open(this->m_filename);

         if (file.is_open())
         {
            for (i = 0; i < this->m_numCount; i++)
            {
               file >> m_numbers[i];
            }
         }
      }

      if (i == this->m_numCount)
      {
         return true;
      }
      else
      {
         return false;
      }
   }

   void Numbers::save()
   {
      if (m_isOriginal && !isEmpty())
      {
         ofstream file(m_filename);
         file << setprecision(2) << fixed;

         for (int i = 0; i < m_numCount; i++)
         {
            file << m_numbers[i] << endl;
         }
      }
   }
   // Overload the += operator to add a single double value to the list of numbers in the array and then return the reference of the current object.
   Numbers &Numbers::operator+=(double value)
   {
      double *temp;
      temp = new double[m_numCount + 1];
      for (int i = 0; i < m_numCount; i++)
      {
         temp[i] = m_numbers[i];
      }
      m_numCount++;
      temp[m_numCount - 1] = value;

      delete[] m_numbers;
      m_numbers = temp;

      return *this;
   }
   // Displays the Numbers object on the screen. Note that all the double numbers are printed with two digits after the decimal point.
   ostream &Numbers::display(ostream &ostr) const
   {
      if (isEmpty())
      {
         ostr << "Empty list";
      }
      else
      {
         ostr << setprecision(2) << fixed;
         ostr << "=========================" << endl;

         if (this->m_isOriginal)
         {
            ostr << this->m_filename << endl;
         }
         else
         {
            ostr << "*** COPY ***" << endl;
         }

         for (int i = 0; i < this->m_numCount; i++)
         {
            if (i != this->m_numCount - 1)
            {
               ostr << m_numbers[i] << ", ";
            }
            else
            {
               ostr << m_numbers[i];
            }
         }

         ostr << endl
              << "-------------------------" << endl;
         ostr << "Total of " << this->m_numCount << " number(s)" << endl;
         ostr << "Largest number:  " << max() << endl;
         ostr << "Smallest number: " << min() << endl;
         ostr << "Average:         " << average() << endl;
         ostr << "=========================";
      }

      return ostr;
   }
   // Overload the insertion operator to display the Numbers object using istream.
   ostream &operator<<(ostream &os, const Numbers &N)
   {
      return N.display(os);
   }
   // Overload the extraction operator to read the Numbers object using istream.
   istream &operator>>(istream &istr, Numbers &N)
   {
      double value;

      if (!(istr.fail()))
      {
         istr >> value;
         N += value;
      }

      return istr;
   }
   // ***

}